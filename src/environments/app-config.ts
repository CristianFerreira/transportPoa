import { environment } from './environment';

export const AppConfig = {
    appName: "poa-transporte",
    auth_token: "blog_travel_token",
    auth_context: "blog_travel_contexto",
    version: "0.0.1",
    defaultRoute: "/",
    serviceProdConfig: {
        rootServiceRoute: "http://www.poatransporte.com.br/php/facades/process.php",
        habilitarDepuracaoRequisicoes: false
    },
    serviceDevConfig: {
        rootServiceRoute: "/api/",
        habilitarDepuracaoRequisicoes: true
    },
    serviceInfo: () => {
        if(environment.production){
            return AppConfig.serviceProdConfig; 
        }else{
            return AppConfig.serviceDevConfig; 
        }
    },
    serviceUrls: () => {
        return {
            bus: {
                getAll: AppConfig.serviceInfo().rootServiceRoute + "?a=nc&p=%&t=o",
            },
            lotacao: {
                getAll: AppConfig.serviceInfo().rootServiceRoute + "?a=nc&p=%&t=l",
            },
            itineraries: {
                getById: AppConfig.serviceInfo().rootServiceRoute + "?a=il&p=",
            }
        };
    }
};
