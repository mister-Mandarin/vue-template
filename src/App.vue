<template>
  <div class='wrapper'>
    <Header />
    <div class='wrapper-content'>
      <section>
        <div class='container'>
          <div class='view-sm isCenter'>
            <router-view />
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  components: {Header, Footer}
};
</script>
