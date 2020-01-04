<script>
  export default {
    props: {
      separator: {
        type: String,
        required: true,
      },
      limit: {
        type: Number,
        required: false,
        default: 0,
      },
    },
    render(h) {
      const text = this.$slots.default[0].text.trim().split(this.separator)
      const children = []

      let remaining = this.limit || text.length - 1
      while (remaining) {
        children.push(h('span', `${text.shift()}${this.separator}`))
        remaining -= 1
      }

      children.push(h('span', text.join(this.separator)))

      return h('span', { class: 'split-text' }, children)
    },
  }
</script>
