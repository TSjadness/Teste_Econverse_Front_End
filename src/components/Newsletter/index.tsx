import { FormEvent, useState } from 'react';
import Button from '../Button';
import { Content, Form, Info, Section } from './styles';

const Newsletter = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <Section id="newsletter" aria-labelledby="newsletter-title">
      <Content>
        <Info>
          <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </Info>
        <Form onSubmit={handleSubmit}>
          <div className="fields">
            <input type="text" name="name" placeholder="Digite seu nome" aria-label="Seu nome" required />
            <input type="email" name="email" placeholder="Digite seu e-mail" aria-label="Seu e-mail" required />
            <Button type="submit" variant="accent">
              {sent ? 'Inscrito' : 'Inscrever'}
            </Button>
          </div>
          <label>
            <input type="checkbox" name="terms" required />
            Aceito os termos e condições
          </label>
        </Form>
      </Content>
    </Section>
  );
};

export default Newsletter;
