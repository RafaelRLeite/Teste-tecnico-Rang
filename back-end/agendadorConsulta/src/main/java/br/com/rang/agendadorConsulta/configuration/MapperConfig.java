package br.com.rang.agendadorConsulta.configuration;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MapperConfig {

	@Bean
	public ModelMapper modelMapper() {
		ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setSkipNullEnabled(true);
        
//     Configuração para a serialização personalizada, ignorando o atributo "idade"
//        modelMapper.addConverter(new Converter<Pessoa, Pessoa>() {
//            @Override
//            public Pessoa convert(MappingContext<Pessoa, Pessoa> context) {
//                Pessoa source = context.getSource();
//                Pessoa destination = context.getDestination();
//                
//                Copia todos os atributos de "source" para "destination" exceto "idade"
//                destination.setNome(source.getNome());
//                destination.setEmail(source.getEmail());
//                Adicione aqui todos os outros atributos que deseja incluir na serialização
//                
//                return destination;
//            }
//        });
        
        return modelMapper;
	}

}
