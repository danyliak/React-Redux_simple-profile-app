export default {
    mainInfo: {
      name: "John Smith",
      location: "Portland, Oregon, USA",
      languages: "English"
    },
    skills: [
        {id: 1, name: "PHP", rating: 1},
        {id: 2, name: "Ruby", rating: 1},
        {id: 3, name: "Javascript", rating: 2},
        {id: 4, name: "ActionScript", rating: 3}
    ],
    portfolio: [
        {id: 1, name: "NavalPlan", description: "PHP, Ruby"},
        {id: 2, name: "MyTime", description: "Javascript"},
        {id: 3, name: "Formidable", description: "PHP, Ruby"},
        {id: 4, name: "MyTime", description: "Javascript"},
        {id: 5, name: "Monsoon", description: "ActionScript"}
    ],
    experience: [
        {id: 1, name: "PHP", description: "6 years"},
        {id: 2, name: "Ruby", description: "7 years"},
        {id: 3, name: "Javascript", description: "4 years"},
        {id: 4, name: "ActionScript", description: "3 years"}
    ],
    additionalInformation: {
        availability: 'Full-time',
        environment: ['Git', 'GitHub', 'vim', 'emacs', 'Jenkins', 'Mac OSX']
    },
    quotes: [
        {
            header: "The most amazing long long long long long long long long",
            description: "... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua et dol ut labore et dolore",
            author: "Martin"
        },
        {
            header: "In clients I look for long long long long long long long long",
            description: "... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            author: "Martin"
        },
        {
            header: "Note",
            description: "... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            type: "note"
        }
    ],
    codeExamples: [
        `function createStyleObject(classNames, style) {
          return classNames.reduce((styleObject, className) => {
            return {...styleObject, ...style[className]};
          }, {});
        }
        function createChildren(style, useInlineStyles) {
          let childrenCount = 0;
          return children => {
            childrenCount += 1;
            return children.map((child, i) => createElement({
              node: child,
              style,
              useInlineStyles,
              key:\`code-segment-$\{childrenCount}-$\{i}\`
            }));
          }
        }`
    ]
}