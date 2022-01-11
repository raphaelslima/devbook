import mock from '../utils/mock'

mock.onPost('/api/home/login').reply(config => {
  const { email, password } = JSON.parse(config.data)

  const user = {
    id: 1,
    name: 'Raphael Lima',
    username: 'raphasousz',
    email: 'raphaeldesousalm@gmail.com',
    avatar: '/images/avatars/avatar_1.jpeg'
  }

  if (email !== 'raphaeldesousalm@gmail.com' || password !== 'admin') {
    return [400, 'Usuário ou senha incorretos']
  }

  return [200, user]
})
