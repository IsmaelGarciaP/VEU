let id = 0;

const app = Vue.createApp({
    data() {
      return {

      }
    },
    methods: {

    }
  })
  
app.component("app-title",{
    template: '<h1>{{title}}</h1>',
    props:{
        title: String,
    },
    data(){
        
    },
    methods:{
        
    }
  })

app.component("del-all-todos",{
    template: '<button @click="delTodos">Borrar todos</button> ',
    props:{
        todos: Array.Object,
    },
    data(){
        
    },
    methods:{
        delTodos(){
            this.todos = [];
        }
    }
  })

  app.component("show-list",{
    template: `          <template v-if="todos.length">
    <ul>
      <todo-item v-for="todo in todos" :key="todo.id" :item="todo" @delTodo="delTodo"></todo-item>
    </ul>
    <show-total todos="todos"></show-total>
  </template>
  <p v-else>No hay tareas</p>`,
    data(){
        return{ 
            todos: [
            {
                id: id++,
                text: "hola",
                done: true,
            },
            {
                id: id++,
                text: "adios",
                done: true,
            },
            {
                id: id++,
                text: "cosa",
                done: false,
            }
        ]}
    },
    methods:{
      delTodo(id){
        this.item = this.item.filter((i) => i.id != id);
    }
    }
  })

  app.component("show-total",{
    template:`<p>Total de cosas: {{todos.length}}</p>`,
    props:{
        todos: Array.Object
    },
    data(){

    },
    methods:{

    }
  })

  app.component("add-title",{
    template: `        <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>    
  </form>`,
    data(){
        return{
            newTodo:'',
        }
    },
    methods:{
        addTodo(){
            alert('Quiero añadir');
            //this.todos.push({id: id++, text: this.newTodo})
            this.newTodo = "";
    },
    }
  })

  app.component('item-text-del',{
    template: `    <del >
    {{ item.text }}
    </del>`,
    props:{
        item: Object,
    },
  })

  app.component('item-text-span',{
    template: `    <span>            
    {{ item.text }}
</span>`,
props:{
    item: Object,
},
  })

  app.component('todo-item',{
    template: `<li @dblclick="delTodo(item.id)">
    <input type="checkbox" v-model="item.done">
    <item-text-del v-if="item.done === true" :item="item"></item-text-del>
    <item-text-span  v-else :item="item"></item-text-span>
    </li>`,
    props:{
        item: Object,
    },
    data(){

    },
    methods:{
      delTodo(){
        this.$emit('delTodo', this.item.id);
      }
    }
  })
  .mount('#app')