/*
  # Create contact inquiries table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `company_name` (text) - Name of the company submitting inquiry
      - `contact_name` (text, required) - Name of the person contacting
      - `email` (text, required) - Email address for contact
      - `phone` (text) - Phone number (optional)
      - `service_interest` (text) - Which service they're interested in
      - `message` (text, required) - Inquiry message
      - `created_at` (timestamptz) - Timestamp of submission

  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add policy for anonymous users to insert inquiries
    - Add policy for authenticated users to read all inquiries (for admin access)
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text DEFAULT '',
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  service_interest text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);