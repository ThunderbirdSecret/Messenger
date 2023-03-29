declare module '*.hbs' {
  import Handlbars, {TemplateDelegate} from 'handlebars';

  const template: TemplateDelegate;
  export default template;
}
