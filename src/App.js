import React from "react";
import {
  Alert,
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import foto from "./assets/perfil.jpg";

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case "linkedin:":
        Alert.alert("https://www.linkedin.com/in/felipe-r-rocha/");
        break;
      case "github:":
        Alert.alert("https://github.com/Jirayakbc/");
        break;
      case "facebook:":
        Alert.alert("Não possui");
        break;
    }
  }

  return (
    <SafeAreaView>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Felipe Roberto Rocha</Text>
          <Text style={style.funcao}>Desenvolvedor Web</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial("github")}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial("facebook")}>
              <Icon name="facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial("linkedin")}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.header}>
              <Text>Experiência Profisisonal</Text>
            </View>
            <View style={style.content}>
              <Text style={style.card_content_text}>Java Script</Text>
              <Text style={style.card_content_text}>HTML</Text>
              <Text style={style.card_content_text}>CSS</Text>
              <Text style={style.card_content_text}>React</Text>
              <Text style={style.card_content_text}>Python</Text>
              <Text style={style.card_content_text}>Sql</Text>
            </View>
          </View>
          <View style={style.card}>
            <View style={style.header}>
              <Text>Formação Acadêmica</Text>
            </View>
            <View style={style.content}>
              <Text style={style.card_content_text}>
                Análise e Desenvolvimento de Sistemas
              </Text>
              <Text style={style.card_content_text}>
                Técnico de Manutenção e Suporte
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: "##989A91",
    flex: 1
  },
  container_cabecalho: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10
  },
  funcao: {
    color: "#939393",
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "86%",
    marginTop: 20
  },
  card_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: "60%",
    borderRadius: 5,
    borderWidth: 5,
    borderColor: "#939393",
    padding: 10,
    marginBottom: 10
  },
  card_content_text: {
    marginBottom: 10,
    color: "#939393"
  }
});
export default App;
