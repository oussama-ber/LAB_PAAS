const profiles = [
  {
    name: 'Imen',
    lastname: 'lastname1'
  },
  {
    name: 'Aymen',
    lastname: 'lastname1'
  }, 
  {
    name: 'Feres',
    lastname: 'lastname1'
  },
  {
    name: 'Nadia',
    lastname: 'lastname1'

  }, 
  {
    name: 'Mohamed',
    lastname: 'lastname1'
  }
];

exports.seed = function (knex) {
  return knex('profiles').del().then(() => {
    return knex('profiles').insert(profiles)
  })
};