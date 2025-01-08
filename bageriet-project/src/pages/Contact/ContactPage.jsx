export function ContactPage() {
    return (
      <div>
        <h1>Kontakt os</h1>
        <form>
          <label>
            Navn:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Besked:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
  

  