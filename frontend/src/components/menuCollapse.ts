import type { InjectionKey, Ref } from 'vue'

// Typed key for the sidebar collapse state that Dashboard.vue provides to TopNavigationBar.vue.
// With a plain string key, inject() returns unknown and a renamed key or changed shape goes unnoticed.
export interface MenuCollapse {
  isCollapse: Ref<boolean>
  toggleCollapse: () => void
}

export const menuCollapseKey: InjectionKey<MenuCollapse> = Symbol('menuCollapse')
