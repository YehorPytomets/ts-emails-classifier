/**
 * Common email headers that provide inner content and topic of the email letter.
 *
 * <p>Other headers are omitted to keep the model simplistic.
 */
export type EmailHeaders = {
  subject: string,
  body: string,
};
