// api/generate.js — Vercel Serverless Function
// Esta función protege tu API Key de Anthropic

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { subgenre, tema, tone } = req.body;

  if (!tema || !subgenre) {
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }

  const SUBGENRES = {
    amor_prohibido: "Amor Prohibido",
    segunda_oportunidad: "Segunda Oportunidad",
    enemigos_amantes: "Enemigos a Amantes",
    romance_historico: "Romance Histórico",
    amor_sobrenatural: "Amor Sobrenatural",
    romance_moderno: "Romance Moderno",
  };

  const subgenreLabel = SUBGENRES[subgenre] || subgenre;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Eres un narrador experto de novelas de romance en español. Escribe una historia de amor de subgénero "${subgenreLabel}" con tono ${tone || 'apasionado'} sobre: "${tema}".

Reglas:
- Primera línea: el título solamente (sin comillas ni "Título:")
- Segunda línea: vacía
- El resto: historia completa de 350-420 palabras
- Usa lenguaje emotivo, descriptivo y sensorial
- Debe tener inicio, clímax romántico y final satisfactorio
- En español latinoamericano

Comienza directamente con el título.`
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: 'Error de la IA', details: data });
    }

    const fullText = data.content[0].text;
    const lines = fullText.split('\n');
    const title = lines[0].trim().replace(/^["'«»]|["'«»]$/g, '');
    const text = lines.slice(2).join('\n').trim();

    return res.status(200).json({ title, text });

  } catch (error) {
    return res.status(500).json({ error: 'Error del servidor', details: error.message });
  }
}
