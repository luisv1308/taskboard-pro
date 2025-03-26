# 📝 TaskBoard Pro

TaskBoard Pro es una aplicación web de gestión de tareas estilo Kanban, con soporte de arrastrar y soltar, estado global y persistencia en Supabase.

## 🚀 Tecnologías utilizadas
- 🎨 **Frontend**: React, Vite, TypeScript, Tailwind CSS, Ant Design
- 🌍 **Estado**: React Query, Zustand
- 🔥 **Backend**: Supabase (PostgreSQL, Auth, Storage)
- 🖱 **Extras**: React DnD para Drag & Drop, Optimistic UI, Dark Mode (en progreso)

## 📌 Funcionalidades principales
✔ **Gestión de proyectos y tareas**  
✔ **Sistema de tablero Kanban con React DnD**  
✔ **Persistencia de datos en Supabase**  
✔ **Manejo de estado con React Query y Zustand**  
✔ **Optimización de caché y sincronización automática con React Query**  
✔ **Autenticación de usuarios (en progreso)**  
✔ **Modo oscuro con Ant Design Tokens (en progreso)**  

---

## 🛠 Estructura del código
```
📦 src
 ┣ 📂 components
 ┃ ┣ 📂 kanban
 ┃ ┃ ┣ 📜 KanbanBoard.tsx    # Tablero principal
 ┃ ┃ ┣ 📜 TaskColumn.tsx     # Columna del tablero (Pendiente, En Proceso, etc.)
 ┃ ┃ ┣ 📜 TaskCard.tsx       # Tarjeta individual de tarea
 ┃ ┃ ┗ 📜 AddTaskModal.tsx   # Modal para agregar tareas
 ┃ ┗ 📂 hooks
 ┃ ┃ ┗ 📜 useProjects.ts     # Hook para manejar proyectos con React Query
 ┃ ┗ 📂 store
 ┃ ┃ ┗ 📜 useProjectStore.ts # Manejo de estado global con Zustand
 ┃ ┗ 📂 lib
 ┃ ┃ ┣ 📜 supabaseClient.ts  # Conexión con Supabase
 ┃ ┃ ┗ 📜 reactQueryClient.ts # Configuración de React Query
 ┣ 📂 pages
 ┃ ┗ 📜 Dashboard.tsx        # Página principal con proyectos
```

---

## 📌 Métodos clave en el código
- `fetchProjects()` → Obtiene proyectos con sus tareas desde Supabase usando React Query.
- `addProject(name)` → Agrega un nuevo proyecto y lo sincroniza con React Query.
- `addTask(projectId, title)` → Añade una tarea a un proyecto en Supabase y actualiza la UI.
- `moveTask(taskId, toStatus)` → Cambia el estado de una tarea y actualiza la base de datos.

---

## 🔜 Próximos pasos
- **Finalizar autenticación con Google/Auth0 en Supabase**  
- **Agregar notificaciones con Ant Design**  
- **Optimizar UI y UX**  
- **Permitir colaboración entre usuarios en proyectos**  

---

## 📜 Estado actual
El proyecto funciona con carga de proyectos y tareas desde Supabase. Se está integrando autenticación y modo oscuro.

## 📎 Repositorio
🔗 [GitHub - TaskBoard Pro](https://github.com/tuusuario/taskboard-pro)
