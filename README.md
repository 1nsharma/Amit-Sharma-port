<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1M9PPIEBSG-PgFeZH-HiGZ34DqZh_q2mq

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


## Contact form deployment (Vercel)

The contact form uses the server-side `/api/contact` function and Resend. Configure these environment variables in the Vercel project settings (Production and Preview as appropriate):

- `RESEND_API_KEY`: Resend API key. Keep this server-side; do not prefix it with `VITE_`.
- `CONTACT_TO_EMAIL`: inbox that should receive website messages.
- `RESEND_FROM_EMAIL`: sender address verified with Resend.

Redeploy after setting the variables. If any variable is missing, the endpoint returns a service-unavailable response rather than falsely reporting that a message was sent. Do not commit secrets to the repository.

## Validation

Run `npm install` and `npm run build` locally or through the GitHub Actions workflow. The repository currently has no committed package lockfile, so the workflow uses `npm install` rather than `npm ci`.
