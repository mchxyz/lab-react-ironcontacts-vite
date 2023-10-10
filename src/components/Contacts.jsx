

const Contacts = ({contacts, getRandomContact}) => {
  const trophyIcon = '\u{1F3C6}';

  return (
    <div>Contacts
          { contacts.map(contact => {
              return (

                <>

            <button onClick={() => getName()} className="btn-name">
              Sort by name
            </button>

        

            <button onClick={() => getPopularity()} className="btn-popularity">
              Sort by popularity
            </button>

                <>

            <button onClick={() => getRandomContact()} className="btn-add">
              Add Random
            </button>

            <>

            {/* <button onClick={() => deleteRandomContact()} className="btn-add">
              delete
            </button> */}

                  <img src={ contact.pictureUrl } />
                  <p> { contact.name } </p>
                  <p> { contact.popularity } </p>
                  { contact.wonOscar && <p>Won an Oscar award! {trophyIcon}</p>}
                  { contact.wonEmmy && <p>Won an Emmy award! {trophyIcon} </p>}

                </>
                </>
                </>
              )
            })
          }
    </div>
  )
}

export default Contacts

/* 
In your application, create a Add Random Contact button. Every time you click on this button, it should add a new random contact to the contacts. You should get random contacts from the remaining contacts that are still not showing.

First, randomly select a contact from the array of remaining contacts. Then add that contact to the array that lives in your state (that's the previously created array of 5 contacts). Do not modify the state directly. Instead, use the state updater function returned from the useState().
*/
