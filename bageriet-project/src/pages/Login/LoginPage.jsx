export function LoginPage() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label>
            Brugernavn:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Log ind</button>
        </form>
      </div>
    );
  }
  
 
  