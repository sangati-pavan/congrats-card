const element = (
  // Write your code here.
  <div className='bg-container'>
    <div>
      <h1 className='heading'>Congratulations</h1>
    </div>
    <div className='bg-small-container'>
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.pn' />
      <h1>Kiran V</h1>
      <p>Vishnu Institute Of Computer Education and Technology, Bhimavaram</p>
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
