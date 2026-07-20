<div align="center">

<!-- LOGO/SÍMBOLO KURAMA NARUTO -->
<img src="https://img.magnific.com/vector-gratis/icono-vectorial-dibujos-animados-sentado-fox-kitsune-ilustracion-icono-vacaciones-animales-vector-plano-aislado_138676-13166.jpg?semt=ais_hybrid&w=740&q=80" alt="Kurama Chibi" width="220"/>

# 🦊🔥 My React App — Kurama Edition (Bijuu Strategy)

[![Docker Pulls](https://img.shields.io/docker/pulls/TU_USUARIO/my-react-app?style=for-the-badge&color=ff5500&logo=docker)](https://hub.docker.com/r/TU_USUARIO/my-react-app)
[![Docker Image Size](https://img.shields.io/docker/image-size/TU_USUARIO/my-react-app/latest?style=for-the-badge&color=cc0000&logo=docker)](https://hub.docker.com/r/TU_USUARIO/my-react-app)
[![Build Status](https://img.shields.io/github/actions/workflow/status/TU_USUARIO/TU_REPO/docker-ci.yml?style=for-the-badge&logo=github&color=ff2200)](https://github.com/TU_USUARIO/TU_REPO/actions)
[![License](https://img.shields.io/badge/License-MIT-gold.svg?style=for-the-badge)](LICENSE)

<p align="center">
  <b>Aplicación en React empaquetada en Docker con pipeline CI/CD y estrategia de etiquetado automático basada en los Nueve Bijuus (九尾の狐 - Naruto).</b>
</p>

[✨ Características](#-características) •
[🍥 Estrategia de Tags Bijuu](#-estrategia-de-tags-bijuu) •
[🚀 Despliegue Rápido](#-despliegue-rápido) •
[⚙️ Variables de Entorno](#️-variables-de-entorno) •
[🛠️ Desarrollo Local](#️-desarrollo-local)

---

</div>

## ✨ Características

- ⚡ **React + Vite / Nginx:** Servido mediante un contenedor ultraligero Alpine (~25MB).
- 🍥 **Bijuu Tagging:** Etiquetado dinámico en GitHub Actions mapeado según la versión de la app (`v1.x.x` a `v9.x.x`).
- 🚀 **Despliegue Continuo:** Publicación automática en Docker Hub al hacer push en la rama `main`.

---

## 🍥 Estrategia de Tags Bijuu

Cada versión (*Major*) libera el chakra de una Bestia con Cola diferente de Naruto:

| Versión | Tag Principal | Alias Bijuu | Bestia / Nombre |
| :---: | :--- | :--- | :--- |
| **`v1.x.x`** | `onetail-shukaku-v1.0.0` | `onetail-shukaku` | 🦝 **Shukaku** (一尾 - 1 Cola) |
| **`v2.x.x`** | `twotails-matatabi-v2.0.0` | `twotails-matatabi` | 🐈‍⬛ **Matatabi** (二尾 - 2 Colas) |
| **`v3.x.x`** | `threetails-isobu-v3.0.0` | `threetails-isobu` | 🐢 **Isobu** (三尾 - 3 Colas) |
| **`v4.x.x`** | `fourtails-songoku-v4.0.0` | `fourtails-songoku` | 🦍 **Son Gokū** (四尾 - 4 Colas) |
| **`v5.x.x`** | `fivetails-kokuo-v5.0.0` | `fivetails-kokuo` | 🐴 **Kokuō** (五尾 - 5 Colas) |
| **`v6.x.x`** | `sixtails-saiken-v6.0.0` | `sixtails-saiken` | 🐌 **Saiken** (六尾 - 6 Colas) |
| **`v7.x.x`** | `seventails-choumei-v7.0.0` | `seventails-choumei` | 🪲 **Chōmei** (七尾 - 7 Colas) |
| **`v8.x.x`** | `eighttails-gyuki-v8.0.0` | `eighttails-gyuki` | 🐙 **Gyūki** (八尾 - 8 Colas) |
| **`v9.x.x`** | `ninetails-kurama-v9.0.0` | `ninetails-kurama` | 🦊 **Kurama** (九尾 - 9 Colas) |
| **`latest`** | `latest` | `latest` | 🔥 Último build estable de `main` |

---

## 🚀 Despliegue Rápido

### 1️⃣ Descargar la imagen
```bash
docker pull TU_USUARIO/my-react-app:ninetails-kurama