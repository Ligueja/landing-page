import { Fragment } from "react/jsx-runtime";
import { Banner as BannerStyled } from "../styled/Banner";
import { Container } from "../styled/Container";
import { Figure } from "../styled/Figure";
import image1 from "../../assets/pacotes.png";
import image2 from "../../assets/concha.jpg";

export function Banner() {
  return (
    <Fragment>
      <Container
        $display='flex'
        $direction='row'
        $justifyContent='center'
        $alignItems='center'
        $fluid
      >
        <BannerStyled>
          <h1>DESCUBRA O MUNDO:</h1>
          <h2>PACOTES DE VIAGENS EM PROMOÇÃO!</h2>
          <p>
            Bem-vindo à sua porta de entrada para aventuras inesquecíveis! Na
            HANOVER, estamos apaixonados por proporcionar experiências únicas
            que ficarão gravadas na sua memória para sempre. E para tornar esses
            sonhos ainda mais acessíveis, estamos empolgados em apresentar
            nossos pacotes de viagens em promoção, feitos sob medida para
            exploradores como você! De praias paradisíacas a cidades vibrantes,
            nossos pacotes de viagens foram cuidadosamente selecionados para
            oferecer uma variedade de destinos que se adaptam a todos os tipos
            de viajantes. Quer você esteja buscando relaxar sob o sol em uma
            ilha tropical ou mergulhar na rica história de uma metrópole
            cosmopolita, temos o pacote perfeito para você.
          </p>
        </BannerStyled>
        <Figure $imageUrl={image1} />
      </Container>
      <Container
        $display='flex'
        $direction='row'
        $justifyContent='center'
        $alignItems='center'
        $fluid
        $reverse
      >
        <BannerStyled>
          <h1>NOVIDADE IMPERDÍVEL:</h1>
          <h2>VIAGEM SÓ DE IDA PARA CIDREIRA!!!</h2>
          <p>
            Você já ouviu falar de Cridreira? Não? Não se preocupe, você não
            está sozinho! Este tesouro escondido no litoral do Rio Grande do Sul
            é como um segredo bem guardado que só os mais sortudos conhecem. E
            nós, na Hanover, estamos aqui para revelar tudo sobre este destino
            inesperadamente incrível! Descubra o Encanto da Concha Acústica de
            Cidreira! Bem-vindo ao palco natural onde a música encontra o mar, a
            Concha Acústica de Cidreira! Localizada nas areias douradas da bela
            praia de Cidreira, no litoral do Rio Grande do Sul, esta obra-prima
            arquitetônica é um verdadeiro tesouro escondido para os amantes da
            música e da natureza.
          </p>
        </BannerStyled>
        <Figure $imageUrl={image2} />
      </Container>
    </Fragment>
  );
}
