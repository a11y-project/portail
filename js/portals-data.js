// Données des portails embarquées directement dans le JavaScript
// Cela évite les problèmes CORS lors de l'ouverture directe des fichiers HTML

const PORTALS_DATA = {
  "portals": [
    {
      "id": "espace-st-laurent-des-bois",
      "name": "Espace Saint-Laurent des bois",
      "sections": [
        {
          "title": "Banque et finances",
          "links": [
            {
              "name": "Accéder à mes comptes en ligne – Crédit Agricole Centre Loire",
              "url": "https://www.credit-agricole.fr/ca-centreloire/particulier/acceder-a-mes-comptes.html"
            }
          ]
        },
        {
          "title": "Assurance et santé",
          "links": [
            {
              "name": "Assurance maladie ameli.fr",
              "url": "https://ameliconnect.ameli.fr/oauth2/authorize?scope=openid+ameliconnect&response_type=code&nonce=310e48455e2ad&redirect_uri=https%3A%2F%2Fassure.ameli.fr%3A443%2FPortailAS%2Fappmanager%2FPortailAS%2Fassure%3F_nfpb%3Dtrue%26_pageLabel%3Das_login_page%26cb%3Dtrue&state=8e62b5e938cd&client_id=compte_AS"
            },
            {
              "name": "Espace adhérent MGEN",
              "url": "https://mamutuelle.mgen.fr/identity/account/login?returnUrl=%2Fidentity%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dmgen-adherent%26redirect_uri%3Dhttps%253A%252F%252Fmamutuelle.mgen.fr%252Fsignin-oidc%26response_type%3Dcode%26scope%3Dopenid%2520profile%26code_challenge%3Dv7GwRyvi6qa7hLQpWXJh3R0vrBATVaoUkiw5LfO7zg0%26code_challenge_method%3DS256%26response_mode%3Dform_post%26nonce%3D638988809209510075.ODYxN2U0YmMtOGQ1Yy00ZDE3LWIzNTUtNjdiZDdkMWZlMmM3YzRhZTc2MDktZGI0Yi00YmExLWI4YTYtYjEwZjQxZmU4YzYy%26state%3DCfDJ8ADKaxBH49BFoT2Xgsm-n8ZJRa0SlAgEk3tF8nNZ9XcRgM9300o6kLKiWWVdSeH_-XYUaaSDZN__b9gCZ6rb4iXuwZm7vJ_C017eH-Ky5OWgBCOxBM4aPlPD5mHb4ncYyBwL6QrBuBMl_xGkR_Wp8eSWsAou49AznyOcnrTArviTot6iKkOaAgD_P10Hel4x56YH0jvmfr2nq8hvUHG1JRo_PwyU8aW5tGl-nti-7r-N7idoSU0Bn9r9Q48Hu0AG6jM3CXcJv47NxeKrlVYivN3UCdx6nFUfEZ3XwGGikHsD6LWyMCH9BgGDMlkx07n5kXURYLDyRKUFh8l9Ec2-k04aJXDX4xeAovG2ouQGzp8j1hicY1G4qDT1rOpJ8T26OA%26x-client-SKU%3DID_NET6_0%26x-client-ver%3D6.35.0.0"
            }
          ]
        },
        {
          "title": "Courrier et messagerie",
          "links": [
            {
              "name": "Boîte de réception gmail.com",
              "url": "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&dsh=S-1257498218%3A1763284304021950&emr=1&flowEntry=ServiceLogin&flowName=GlifWebSignIn&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ARESoU0lBiADRgtSVl-Wbz1JFQ5jd32107CAC2NytnUbtmg9racS1DfwjE0PSB4q2951WCO4z_ae&osid=1&service=mail"
            }
          ]
        },
        {
          "title": "Intelligence artificielle et recherche",
          "links": [
            {
              "name": "ChatGPT",
              "url": "https://www.chatgpt.com/"
            },
            {
              "name": "Perplexity",
              "url": "https://www.perplexity.ai"
            },
            {
              "name": "Recherche sur Google.fr",
              "url": "https://www.google.fr"
            },
            {
              "name": "Recherche sur Youtube",
              "url": "https://www.youtube.com"
            }
          ]
        },
        {
          "title": "Télécommunications et énergie",
          "links": [
            {
              "name": "Espace client EDF",
              "url": "https://espace-client.edf.fr/sso/XUI/#login/&realm=%2FINTERNET&goto=https%3A%2F%2Fespace-client.edf.fr%3A443%2Fsso%2Foauth2%2FINTERNET%2Fauthorize%3Fresponse_type%3Dcode%26scope%3Dopenid%2520email%2520profile%2520infotech%2520b2c_services%2520b2c_business_process%2520comptes-internet%2520gestion-bons-plans%2520contrats-services-options%2520contracts_list%253Aread%2520customers%253Aread%2520contracts%253Aread%2520documents%253Aread%2520edelia_comparisons%253Aread%2520edelia_elec_consumption%253Aread%2520edelia_gas_consumption%253Aread%2520edelia_offer_subscription%253Awrite%26client_id%3DSiteCP%26state%3DZu2p_cG2kiBt63Xx1E4hWV_HVnQ%26redirect_uri%3Dhttps%253A%252F%252Fparticulier.edf.fr%252Ffr%252Faccueil%252Fespace-client%252Fmoduleopenidc.html%26nonce%3D0MWUu0hh5MfA6_ATwZkX3iSdp3W3jmnn3GQoF6cbGcs%26code_challenge%3DXtEUlW4XTXUrrSF0F7eBTjR3Vp6NqGc6tt8AtS0tN8M%26code_challenge_method%3DS256%26response_mode%3Dform_post"
            },
            {
              "name": "Espace client orange.fr",
              "url": "https://login.orange.fr/?service=nextecare&return_url=https://espace-client.orange.fr/page-accueil&source=ec_accueil_espace_client_non_logue_v2-s_identifier"
            }
          ]
        },
        {
          "title": "Administration et impôts",
          "links": [
            {
              "name": "Espace particulier Impôt.gouv.fr",
              "url": "https://cfspart-idp.impots.gouv.fr/oauth2/authorize?authType=sso&prompt=login&scope=openid+profile+authChoice+otpEscape&nonce=USIAdvspTpMYdNs4calORQ&response_type=code&redirect_uri=https%3A%2F%2Fcfspart.impots.gouv.fr%2F%3Fopenidconnectcallback%3D1&client_id=52ed02940b0f1c57512f2d6fd064dddffccdea03&state=53c6cbbbf6490361a8dfc6ef47c33a1b278f01e0be1bdffbed0d48052d7c25be"
            }
          ]
        },
        {
          "title": "Réseaux sociaux",
          "links": [
            {
              "name": "Facebook",
              "url": "https://www.facebook.com"
            }
          ]
        }
      ]
    }
  ]
};