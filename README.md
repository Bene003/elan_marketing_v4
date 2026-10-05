# Superflux : site web

Site bilingue (anglais, français) de Superflux : accompagnement et croissance des PME.

Conçu et développé par **Hephera**. Pour toute modification, évolution ou question, contactez Hephera.

## Technique

- Next.js, TypeScript, Tailwind CSS
- Hébergement : Vercel (déploiement automatique à chaque mise à jour de la branche `main`)
- Réservation : Cal.com · Formulaire : envoi par courriel (Brevo)

## Variables d'environnement (Vercel)

| Variable | Rôle |
|---|---|
| `CALENDRIER_URL_FR` | Lien Cal.com de l'événement en français |
| `CALENDRIER_URL_EN` | Lien Cal.com de l'événement en anglais |
| `BREVO_API_KEY` | Clé d'envoi Brevo |
| `LEAD_FROM_EMAIL` | Adresse d'expédition, vérifiée dans Brevo |
| `LEAD_TO_EMAIL` | Adresse qui reçoit les demandes du formulaire |
