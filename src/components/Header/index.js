import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile, Mid, Loc } from './styles';

import logo from '../../assets/logo.png';
import wpp from '../../assets/whatsapp.png';
import map from '../../assets/placeholder.png';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </nav>
        <Loc>
          <Link className="Duvidas" to="/">
            <img src={map} alt="logowpp" />
            <strong>QNP 14, C</strong>
          </Link>
        </Loc>

        <aside>
          <Mid>
            <Link className="Duvidas" to="/">
              <strong>Dúvidas</strong>
              <img src={wpp} alt="logowpp" />
            </Link>

            <button type="button">Agendar</button>
          </Mid>
          <Profile>
            <div>
              <strong>Beatriz Queiroz</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://sobradeestoque.com.br/wp-content/uploads/2013/07/avatar-uso-site.png"
              alt="Avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
