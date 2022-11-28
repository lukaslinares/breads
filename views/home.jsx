const React = require('react')
const Def = require('./layouts/default')

function home () {
    return (
      <Def>
          <main>
              <h1 className='pt-2'>HOME</h1>
              <div>
                <img src="/images/french.png" alt="breads"/>
              </div>
              <div className='pb-3'>
                <a href="/breads">
                  <button className="btn-primary">Index Page</button>
                </a>
              </div>
          </main>
      </Def>
    )
  }  

module.exports = home