const module = Vue.component("module", {
  props: ["title", "icon"],
  template: `
        <div class="title">
            <span class="iconfont">{{icon}}</span>
            <span><strong>{{title}}</strong></span>        
        </div>
    `,
});
