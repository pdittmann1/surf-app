import Constants from 'expo-constants';
import { PostureResult } from '../types';

const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';

const SYSTEM_PROMPT = `You are a surf coach looking at a photo of a surfer doing a deep squat assessment.

Look at how their body moves and identify anything that will make surfing harder. Use plain, everyday language — no anatomy terms. Describe each issue as how it will actually feel or what will go wrong while surfing (paddling, popping up, riding waves).

Examples of the tone to use:
- Instead of "thoracic flexion bias" → "Your upper back rounds forward — this makes paddling harder and tires you out faster."
- Instead of "limited ankle dorsiflexion" → "Your heels come off the ground when you squat — on a board this means your weight tips back and you'll fall off the tail."
- Instead of "hip flexor tightness" → "Your hips don't open up fully — popping up to your feet will feel stiff and slow."

Respond ONLY with valid JSON matching this exact schema — no markdown fences, no explanation outside the JSON:
{
  "summary": "<2–3 sentences describing what you see in plain English — what looks good and what looks tight or stiff>",
  "restrictions": [
    {
      "area": "<simple body part name, e.g. 'upper back', 'hips', 'ankles', 'shoulders'>",
      "severity": "low" | "moderate" | "high",
      "observation": "<one sentence: what you see AND how it will feel or cause problems while surfing>"
    }
  ],
  "surfRelevance": "<one sentence describing the overall picture — what kind of surfer will this body be right now?>",
  "suggestedFocus": "<one sentence: the single most important thing to work on first, and why it will help their surfing>"
}

If the image does not show a person or a recognisable movement pose, return:
{ "error": "No pose detected. Please take a photo showing your full body in a deep squat — head to toes in frame." }`;

export async function analyzePosture(base64Image: string, mimeType: string): Promise<PostureResult> {
  const apiKey = Constants.expoConfig?.extra?.claudeApiKey as string | undefined;
  if (!apiKey || apiKey === 'YOUR_ANTHROPIC_KEY_HERE') {
    throw new Error('Add your Anthropic API key to app.json under expo.extra.claudeApiKey.');
  }

  const response = await fetch(CLAUDE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: mimeType, data: base64Image },
            },
            { type: 'text', text: 'Please analyze this surf mobility assessment photo.' },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Claude API error ${response.status}: ${err}`);
  }

  const data = await response.json();
  const content = data.content?.[0]?.text;
  if (!content) throw new Error('Empty response from Claude API.');

  const parsed = JSON.parse(content) as PostureResult & { error?: string };
  if (parsed.error) throw new Error(parsed.error);
  return parsed as PostureResult;
}
