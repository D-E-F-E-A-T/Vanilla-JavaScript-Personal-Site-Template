var contactString = `
<style>
  * {
    box-sizing: border-box;
    font-family: monospace;
  }

  input[type=text], select, textarea {
    width: 100%;
    padding: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 0.4rem;
    box-sizing: border-box;
    margin-top: 0.6rem;
    margin-bottom: 1.6rem;
    resize: vertical;
  }

  input[type=submit] {
    background-color: #282a36;
    color: white;
    padding: 1.2rem 2rem;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #c2c2c2;
  }

  .container {
    margin: auto;
    max-width: 60vw;
    border-radius: 0.5rem;
    background-color: #f2f2f2;
    padding: 2rem;
  }
</style>

<br /><br /><br />
<div class="container">
  <h1>Meow at me...</h1>
  <br />
  <form name="contact" method="POST" data-netlify="true" style="padding-left: 2rem;">
    <input type="text" id="fname" name="firstname" placeholder="Your first name...">

    <input type="text" id="lname" name="lastname" placeholder="Your last name...">

    <textarea id="subject" name="subject" placeholder="Your message..." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>
`