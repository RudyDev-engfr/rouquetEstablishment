export default function ContactPage() {
  return (
    <div className='container'>
      <h1>Contactez-nous</h1>
      <form>
        <div>
          <label>Nom</label>
          <input type='text' name='name' />
        </div>
        <div>
          <label>Email</label>
          <input type='email' name='email' />
        </div>
        <div>
          <label>Message</label>
          <textarea name='message'></textarea>
        </div>
        <button type='submit'>Envoyer</button>
      </form>
    </div>
  );
}
