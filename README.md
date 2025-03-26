# Crear un archivo README.md con el contenido del README estructurado
readme_content = """# 📝 TaskBoard Pro

TaskBoard Pro es una aplicación de gestión de tareas y proyectos estilo Kanban, similar a Trello, desarrollada con **React, Vite, Zustand, TypeScript, Tailwind CSS y Ant Design**.

## 🚀 Tecnologías utilizadas
- ⚛️ **React + Vite** - Para una aplicación rápida y eficiente.
- 📜 **TypeScript** - Tipado estático para mayor seguridad y mantenibilidad.
- 🎨 **Tailwind CSS + Ant Design** - Estilización moderna y componentes listos para usar.
- 🌍 **Zustand** - Manejo de estado ligero y eficiente.
- 🖱️ **React DnD** - Soporte de **drag & drop** para mover tareas en el tablero.
- 🔥 **Firebase/Supabase** *(próximamente)* - Para persistencia y autenticación de usuarios.
- ⚡ **React Query** *(próximamente)* - Para manejo eficiente de datos en el frontend.

## 📌 Funcionalidades principales
✔️ **Gestión de proyectos** - Crea y administra múltiples proyectos.  
✔️ **Tablero Kanban** - Organiza tareas en columnas (*Pendiente, En Proceso, Completado*).  
✔️ **Drag & Drop** - Arrastra tareas entre columnas.  
✔️ **Estado global con Zustand** - Rápido y sin necesidad de Redux.  
✔️ **Ant Design UI** - Modales, botones y formularios con diseño profesional.  
✔️ **Modal para agregar tareas** - Interfaz interactiva con validación.  
✔️ **Modo oscuro** *(próximamente)*.  
✔️ **Autenticación con Google/Auth0** *(próximamente)*.  

---

## 🛠 Instalación y configuración
### 1️⃣ Clonar el repositorio
\`\`\`sh
git clone https://github.com/tuusuario/taskboard-pro.git
cd taskboard-pro
\`\`\`

### 2️⃣ Instalar dependencias
\`\`\`sh
npm install
\`\`\`

### 3️⃣ Configurar Tailwind CSS
Si es necesario, ejecuta:
\`\`\`sh
npx tailwindcss init -p
\`\`\`

### 4️⃣ Iniciar el servidor de desarrollo
\`\`\`sh
npm run dev
\`\`\`
La aplicación estará disponible en **http://localhost:5173/**.

---

## 📂 Estructura del proyecto
\`\`\`
📦 src
 ┣ 📂 components
 ┃ ┣ 📂 kanban
 ┃ ┃ ┣ 📜 AddTaskModal.tsx   # Modal para agregar tareas
 ┃ ┃ ┣ 📜 KanbanBoard.tsx    # Tablero principal
 ┃ ┃ ┣ 📜 TaskColumn.tsx     # Columna del tablero (Pendiente, En Proceso, etc.)
 ┃ ┃ ┗ 📜 TaskCard.tsx       # Tarjeta individual de tarea
 ┃ ┗ 📂 ui
 ┃ ┃ ┗ 📜 Button.tsx         # Botón reutilizable (Ejemplo)
 ┣ 📂 store
 ┃ ┗ 📜 useProjectStore.ts   # Estado global con Zustand
 ┣ 📂 pages
 ┃ ┗ 📜 Dashboard.tsx        # Página principal con proyectos
 ┣ 📂 types
 ┃ ┗ 📜 kanban.ts            # Interfaces para tipado TypeScript
 ┣ 📜 App.tsx                # Punto de entrada de la app
 ┗ 📜 main.tsx               # Renderiza la aplicación en React
\`\`\`

---

## 📌 Cómo agregar una tarea
1️⃣ Haz clic en el botón **"Agregar Tarea"**.  
2️⃣ Escribe el título de la nueva tarea en el **modal**.  
3️⃣ Presiona **Enter** o haz clic en **"Agregar"**.  
4️⃣ La tarea aparecerá en la columna **"Pendiente"**.  

---

## 🔜 Roadmap y mejoras futuras
🔹 **Persistencia de datos en Firebase/Supabase**  
🔹 **Autenticación con Google/Auth0**  
🔹 **Modo oscuro con Ant Design Tokens**  
🔹 **Notificaciones en tiempo real con WebSockets**  

---

## 📜 Licencia
MIT License. Proyecto abierto para cualquier uso. ✨

---

## 💡 Contribuciones
¡Todas las mejoras y sugerencias son bienvenidas! Para contribuir:
1. **Fork** este repositorio.
2. Crea una **rama** (\`git checkout -b feature/nueva-funcionalidad\`).
3. **Commitea** tus cambios (\`git commit -m "Agregada nueva funcionalidad"\`).
4. **Haz un push** a la rama (\`git push origin feature/nueva-funcionalidad\`).
5. Abre un **Pull Request** y lo revisaremos. 🎉

---

### **👨‍💻 Autor**
📌 Desarrollado por [Tu Nombre](https://github.com/tuusuario) 🚀  
"""

# Guardar el contenido en un archivo
file_path = "/mnt/data/README.md"
with open(file_path, "w", encoding="utf-8") as file:
    file.write(readme_content)

# Proporcionar el archivo al usuario
file_path
