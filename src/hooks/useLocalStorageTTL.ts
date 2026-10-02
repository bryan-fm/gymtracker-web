import { useState, useEffect } from 'react'

export function useLocalStorageTTL(key: string, initialValue: any, ttlInMs: number) {
  // Inicializa o estado buscando o valor do LocalStorage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const itemStr = window.localStorage.getItem(key)
      if (!itemStr) return initialValue

      const item = JSON.parse(itemStr)
      const now = new Date().getTime()

      // Se expirou, remove e retorna o valor inicial
      if (now > item.expiry) {
        window.localStorage.removeItem(key)
        return initialValue
      }
      return item.value
    } catch (error) {
      console.error('Erro ao ler o localStorage:', error)
      return initialValue
    }
  })

  // Função para atualizar o estado e o LocalStorage com o TTL
  const setValue = (value: any) => {
    try {
      // Permite que o valor seja uma função de atualização (padrão do useState)
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)

      const now = new Date().getTime()
      const item = {
        value: valueToStore,
        expiry: now + ttlInMs,
      }
      window.localStorage.setItem(key, JSON.stringify(item))
    } catch (error) {
      console.error('Erro ao salvar no localStorage:', error)
    }
  }

  return [storedValue, setValue]
}
