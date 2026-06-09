# send-registration-notification

This is a Supabase Edge Function that sends an email notification via Resend whenever a new registration is submitted.

## Prerequisites

1. A [Resend](https://resend.com) account to send emails.
2. An API Key from your Resend account.
3. Supabase CLI installed.

## Setup Instructions

### 1. Set the Environment Variable

Set the `RESEND_API_KEY` environment variable in your Supabase project:

```bash
supabase secrets set RESEND_API_KEY=re_your_api_key_here
```

### 2. Deploy the Edge Function

Deploy the function to your Supabase project:

```bash
supabase functions deploy send-registration-notification --no-verify-jwt
```
*Note: We use `--no-verify-jwt` because this function is called via a Database Webhook automatically from Supabase, not from the authenticated client.*

### 3. Configure the Database Webhook

You need to set up a Database Webhook to trigger this function when a new registration occurs. You can do this easily from the Supabase Dashboard:

1. Go to your **Supabase Dashboard**.
2. Navigate to **Database** -> **Webhooks**.
3. Click **Create Webhook**.
4. Configure it as follows:
   - **Name:** `send_email_on_registration`
   - **Table:** `registrations`
   - **Events:** Select `Insert`
   - **Type:** `Supabase Edge Functions`
   - **Method:** `POST`
   - **Edge Function:** Select `send-registration-notification`
   - **HTTP Headers:** Add a new header:
     - Header: `Content-type`
     - Value: `application/json`
5. Click **Create webhook**.

### Testing Locally

You can test this function locally using the Supabase CLI:

```bash
# Start your local Supabase instance
supabase start

# Set your local secrets
echo "RESEND_API_KEY=re_your_api_key_here" > supabase/.env.local

# Serve the functions locally
supabase functions serve send-registration-notification --env-file ./supabase/.env.local
```
