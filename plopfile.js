// This is for generating component structure from a boilerplate
// To create a new component run:
//   npm run generate component
// and fill in the name and type

const base = 'src/components/{{lowerCase type}}s/{{pascalCase name}}/';

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name: ',
      },
      {
        type: 'input',
        name: 'type',
        message: 'Component type (atom, molecule, organism): ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: base + 'index.tsx',
        templateFile: 'plopTemplates/Component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: base + 'index.types.ts',
        templateFile: 'plopTemplates/Component/index.types.ts.hbs',
      },
      {
        type: 'add',
        path: base + 'index.module.scss',
        templateFile: 'plopTemplates/Component/index.module.scss.hbs',
      },
    ],
  });
};
