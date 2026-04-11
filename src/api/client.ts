// Central API client. In Phase 1 there is no backend, so all calls return
// mocked "demo mode" responses. When the backend exists, set VITE_API_URL
// in Vercel env vars and the same code will hit the real endpoints — no
// component changes required.

const API_URL = import.meta.env.VITE_API_URL ?? "";
export const DEMO_MODE = API_URL.length === 0;

export type ContactRequest = {
  name: string;
  email: string;
  message: string;
};

export type ContactResponse = {
  ok: boolean;
  demo?: boolean;
  message: string;
};

async function postJson<TReq, TRes>(path: string, body: TReq): Promise<TRes> {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  return res.json() as Promise<TRes>;
}

export const api = {
  async submitContact(req: ContactRequest): Promise<ContactResponse> {
    if (DEMO_MODE) {
      await new Promise((r) => setTimeout(r, 600));
      return {
        ok: true,
        demo: true,
        message:
          "Demo mode: your message wasn't actually sent. The backend isn't wired up yet — please email me directly for now.",
      };
    }
    return postJson<ContactRequest, ContactResponse>("/api/contact", req);
  },
};
