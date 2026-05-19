const subjectsFixture = {
  adminSubjectsURL: 'https://admin.studyllab.com.br/disciplinas',
  courses: {
    software: { value: 'ES', label: 'Engenharia de software' },
    computing: { value: 'CC', label: 'Ciência da computação' },
    civil: { value: 'EC', label: 'Engenharia civil' },
    production: { value: 'EP', label: 'Engenharia de produção' },
    mechanics: { value: 'EM', label: 'Engenharia mecânica' },
  },
  filters: {
    all: 'Todos os curso',
    software: 'Engenharia de Software',
    computing: 'Ciência da Computação',
    civil: 'Engenharia Civil',
    production: 'Engenharia de Produção',
    mechanics: 'Engenharia Mecânica',
  },
  register: {
    defaultCourse: 'ES',
    defaultProfessor: 'Professor Automacao',
    defaultStudentsCount: '50',
  },
  messages: {
    requiredCode: '*Insira o código da disciplina',
    requiredName: '*Insira o nome da disciplina',
    requiredProfessor: '*Insira o professor(a) responsável',
    requiredStudentsCount: '*Insira a quantidade de alunos',
    requiredCourse: '*Insira o curso da disciplina',
    noChangesDetected: 'Nenhuma alteração detectada.',
    requiredFieldsEdit: 'Por favor, preencha todos os campos obrigatórios.',
    deleteConfirmationText: 'Tem certeza de que deseja excluir:',
    irreversibleAction: 'Esta ação é irreversível.',
    duplicateSubject: 'Disciplina existente',
    dependentDeleteWarning: 'Verifique se algum tópico, possui está disciplina!',
  },
  placeholders: {
    code: 'xxxxxx',
    name: 'Digite o nome da disciplina',
    professor: 'Nome do professor',
    studentsCount: 'Quantidade de alunos',
    course: 'Selecione o curso',
  },
  labels: {
    code: 'Código da Disciplina',
    name: 'Nome da Disciplina',
    professor: 'Professor(a) Responsável',
    studentsCount: 'Quantidade de Alunos',
    course: 'Curso',
  },
};

function buildTestSubject(overrides = {}) {
  const suffix = `${Date.now()}${Math.floor(Math.random() * 100)}`.slice(-4);

  return {
    code: overrides.code ?? `RUS${suffix}`,
    name: overrides.name ?? `Teste Automacao ${suffix}`,
    professor: overrides.professor ?? `Professor Automação`,
    studentsCount: overrides.studentsCount ?? '50',
    course: overrides.course ?? subjectsFixture.register.defaultCourse,
    courseLabel:
      overrides.courseLabel ??
      subjectsFixture.courses.software.label,
  };
}

module.exports = { subjectsFixture, buildTestSubject };
