import { EmailsProvider } from '../emails-provider';
import EmailLetter from '../email-letter';
import { EmailHeaders } from '../email-headers';

/**
 * Provides hardcoded emails from the in-memory source.
 */
export default abstract class InMemoryEmailsProvider implements EmailsProvider {

  private readonly emails = this.read();

  /**
   * Reads emails from the source.
   *
   * @return {Array<EmailLetter>} retrieved emails
   * @private
   */
  private read(): Array<EmailLetter> {
    return this
      .source()
      .map((headers: EmailHeaders) => EmailLetter.from(headers));
  }

  /**
   * Emails source.
   *
   * <p>Specific providers should specify emails location,
   * like object or function call that returns emails.
   *
   * @return {Array<EmailHeaders>} emails from the in-memory source
   * @protected
   */
  protected abstract source(): Array<EmailHeaders>;

  /**
   * Returns emails from the in-memory source.
   */
  public getEmails(): Array<EmailLetter> {
    return this.emails;
  }
}
