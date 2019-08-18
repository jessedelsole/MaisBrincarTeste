import TelaPrincipal from './Fonte/Telas/TelaPrincipal';
import TelaSelecaoVideo from './Fonte/Telas/TelaSelecaoVideo';
import TelaReprodutor from './Fonte/Telas/TelaReprodutor';
import TelaCarregando from './Fonte/Telas/TelaCarregando';
import TelaAutenticacao from './Fonte/Telas/TelaAutenticacao';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

const NavigatorAplicacao = createStackNavigator({ NavPrincipal: TelaPrincipal, NavSelecaoVideo:TelaSelecaoVideo, NavReprodutor:TelaReprodutor});

export default createAppContainer( createSwitchNavigator(
  {
    NavCarregando   : TelaCarregando,
    NavAutenticacao : TelaAutenticacao,
    NavAplicacao    : NavigatorAplicacao,
  },
  {
    initialRouteName: 'NavCarregando'
  }
));


