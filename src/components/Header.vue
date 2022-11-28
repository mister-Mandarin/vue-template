
<template>
  <header class='navbar'>
    <div class='container'>
      <div class='navbar-content'>
        <router-link class='navbar-logo' to='/'>{{ title }}</router-link>
        <ul class='navbar-list'>
          <li v-for='link in links' :key='link.alias' class='navbar-item'>
            <router-link :to='link.url' class='navbar-link'
            >{{ link.title }}
            </router-link>
          </li>
          <li style='width: 40px'>
            <a href='#' target='_blank'>
              <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                   alt='GitHub'>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { app, links } from '@/_config';
export default {
  data() {
    return {
      title: app.title,
      links: links
    };
  }
};
</script>
