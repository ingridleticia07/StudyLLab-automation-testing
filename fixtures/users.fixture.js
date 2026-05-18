const usersFixture = {
  baseURL: 'https://studyllab.com.br/',
  adminUsersURL: 'https://admin.studyllab.com.br/usuarios',
  apiBaseURL: 'https://api.studyllab.com.br',
  apiKey: 'e24dd2210803b4737a9bd9e3163a4ca807b63201c3bc32b68fb122ca52efff36',
  filters: {
    status: {
      all: 'Todos os status',
      active: 'Ativo',
      inactive: 'Inativo',
    },
    type: {
      all: 'Todos os tipos',
      admin: 'Admin',
      student: 'Aluno',
      professor: 'Professor',
    },
  },
  register: {
    invalidEmail: 'usuario@gmail.com',
    defaultCourse: 'ES',
    defaultRole: 'student',
    defaultPassword: 'Senha1234',
  },
  messages: {
    requiredName: '*Insira o nome',
    requiredCourse: '*Insira o curso',
    requiredRole: '*Insira o tipo de usuário',
    requiredMatricula: '*Insira a matrícula/siape',
    requiredEmailInstitutional: '*Insira um email institucional válido',
    requiredPassword: '*A senha precisa ter no mínimo 8 caracteres e deve conter números e letras minúsculas e maiúsculas',
    noChangesDetected: 'Nenhuma alteração detectada.',
    deleteConfirmationTitle: 'Confirmar exclusão',
    deleteConfirmationText: 'Tem certeza de que deseja excluir:',
    irreversibleAction: 'Esta ação é irreversível.',
  },
};

function buildTestStudentUser() {
  const suffix = `${Date.now()}`.slice(-5);

  return {
    name: `Usuario Automacao 5${suffix}`,
    matricula: `5${suffix}`,
    email: `usuario.automacao5${suffix}@alu.ufc.br`,
    password: usersFixture.register.defaultPassword,
    course: usersFixture.register.defaultCourse,
    role: usersFixture.register.defaultRole,
  };
}

module.exports = { usersFixture, buildTestStudentUser };
