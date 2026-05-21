export async function sendMakeWebhook(
  channel: string,
  payload: Record<string, unknown>,
  label = "webhook",
): Promise<{ ok: boolean; error?: string }> {
  const url = process.env.REVIEW_WEBHOOK_URL?.trim();

  if (!url) {
    console.warn(`[${label}] REVIEW_WEBHOOK_URL is not set`);
    return { ok: false, error: "REVIEW_WEBHOOK_URL not configured" };
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ channel, ...payload }),
    });

    if (!response.ok) {
      return { ok: false, error: `Webhook returned ${response.status}` };
    }

    return { ok: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Webhook request failed";
    console.error(`[${label}]`, message);
    return { ok: false, error: message };
  }
}
