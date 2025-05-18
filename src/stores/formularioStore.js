import { defineStore } from 'pinia'

export const useFormularioStore = defineStore('formulario', {
  state: () => ({
    paso1: {
      nombres: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      correo: '',
      telefono: '',
      password: '',
      confirmarPassword: ''
    },
    paso2: {
      fecha_nacimiento: '',
      sexo: '',
      tipoDocumento: '',
      documentoIdentidad: '',
      extension: '',
      procedencia: ''
    },
    paso3: {
      matricula_colm: '',
      direccion_consultorio: '',
      titulacion: '',
      universidad: '',
      especialidad: '',
      disponibilidad: [] // array de objetos: { dia, hora_inicio, hora_fin }
    }
  }),

  actions: {
    resetFormulario() {
      this.paso1 = {
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        correo: '',
        telefono: '',
        password: '',
        confirmarPassword: ''
      }

      this.paso2 = {
        fecha_nacimiento: '',
        sexo: '',
        tipoDocumento: '',
        documentoIdentidad: '',
        extension: '',
        procedencia: ''
      }

      this.paso3 = {
        matricula_colm: '',
        direccion_consultorio: '',
        titulacion: '',
        universidad: '',
        especialidad: '',
        disponibilidad: []
      }
    },

    obtenerFormularioCompleto() {
      return {
        ...this.paso1,
        ...this.paso2,
        ...this.paso3
      }
    }
  }
})
