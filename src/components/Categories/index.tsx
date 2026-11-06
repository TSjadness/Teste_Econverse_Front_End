import { CATEGORIES } from '../../utils/content';
import { Card, List, Section } from './styles';

const Categories = () => (
  <Section id="categorias" aria-label="Categorias">
    <List>
      {CATEGORIES.map((category) => (
        <li key={category.id}>
          <Card href="#produtos" $active={category.active} aria-current={category.active ? 'true' : undefined}>
            <span className="box">
              <img src={category.icon} alt="" />
            </span>
            {category.label}
          </Card>
        </li>
      ))}
    </List>
  </Section>
);

export default Categories;
