export class Api {
  static base_url = "https://contacts-api-edard3v.deno.dev";
  static start_register_url = `${this.base_url}/start_register`;
  static login_url = `${this.base_url}/login`;
  static refresh_token_url = `${this.base_url}/refresh_token`;

  static get_contacts_url = `${this.base_url}/get_contacts`;
  static add_contact_url = `${this.base_url}/add_contact`;
  static remove_contact_url = (id: UUID) => `${this.base_url}/remove_contact/${id}`;
}
