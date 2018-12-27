<template>
  <div id="editor" type="text/plain"></div>
</template>
<script>
export default {
  name: 'Ueditor',
  data: function () {
    return {
      editor: ''
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }

  },
  watch: {
    value(newVal) {
      this.editor.setContent(newVal)
    }
  },
  mounted() {
    window.UE.delEditor('editor')
    this.editor = window.UE.getEditor('editor')
    this.editor.addListener('ready', () => {
      this.editor.setContent(this.value)
    })
  },
  methods: {
    getUEContent() {
      return this.editor.getContent()
    }
  },
  destroyed() {
    this.editor.destroy()
  }
}
</script>
