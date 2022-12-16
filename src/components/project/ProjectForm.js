import Input from "../form/Input";
import Select from "../form/Select";
import SubmiteButton from "../form/SubmiteButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({btnText}) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome no projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="bugget"
        placeholder="Insira o orçamento total"
      />
      <Select name="category_id" text="Selecione a categoria"/>
      <SubmiteButton text={btnText}/>
    </form>
  );
}

export default ProjectForm;
