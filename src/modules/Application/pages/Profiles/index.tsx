import React from 'react';

import { FiPlus } from 'react-icons/fi';

import {
  Container,
  Header,
  Content,
  Title,
  AllProfiles,
  CardProfile,
  CardAvatar,
  CardText,
  Button,
  AddProfile,
} from './styles';
import logo from '../../../../assets/logo.svg';

const Profiles: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logo} />
      </Header>

      <Content>
        <Title>Quem está assistindo?</Title>

        <AllProfiles>
          <CardProfile>
            <CardAvatar>
              <img src="https://occ-0-2809-1380.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABXlfnqwPaCvp4emIvzqMJrlQMuwN2RYRWb-PlF4WXUmoqjCpg3onH3Uv8YEfEvWWuccl1M8xHAcadVNP9_kqlAOE4Kv_.png?r=893" />
            </CardAvatar>
            <CardText>Daniel</CardText>
          </CardProfile>

          <CardProfile>
            <CardAvatar>
              <img src="https://occ-0-2809-1380.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABUOVXiUYacjlBLwNjhXI7yzjuheEv4j03647J1rGAtRjLkqadP2bMyykXIzsZ04QZnHJS0md3nlMNNj0HIMbQNKYr7RE.png?r=071" />
            </CardAvatar>
            <CardText>Karina</CardText>
          </CardProfile>

          <CardProfile>
            <CardAvatar>
              <img src="https://occ-0-2809-1380.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABYCq-HPaBmwWzyEo8UjC3jQ7a2mKJhU4uPbQwFrauKbu9_-6GpfPccnQh3UWZvsGLQ1MwLo_4YZ-kuTiAsqpq0oEdPXS.png?r=f71" />
            </CardAvatar>
            <CardText>Convidado</CardText>
          </CardProfile>

          <CardProfile>
            <CardAvatar>
              <img src="https://occ-0-2809-1380.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABdRY7nP8YHTg-hMluj9xeCygb7vKigcLX8Snda2kOFOUxwyv2-cUAfhVwewYAUS-xcCcfWi-KWGLL_1SZX0mnFaq_vWb.png?r=fcd" />
            </CardAvatar>
            <CardText>Infantil</CardText>
          </CardProfile>

          <CardProfile>
            <AddProfile>
              <FiPlus className="icon" color="grey" size={150} />
            </AddProfile>
            <CardText>Novo perfil</CardText>
          </CardProfile>
        </AllProfiles>

        <Button>GERENCIAR PERFIS</Button>
      </Content>
    </Container>
  );
};

export default Profiles;
