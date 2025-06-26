'use client'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
// Remove this import: import { apiVersion, dataset, projectId } from './sanity/env'
import { allTypes } from './sanity/schemaTypes'
import { structure } from './sanity/structure'
import { resolve } from './sanity/lib/resolve'

// Add these lines instead of importing from ./sanity/env
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ov2fcco0'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-12'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Enough',
  perspective: 'published',
  schema: {
    types: allTypes,
  },
  plugins: [
    structureTool({
      structure
    }),
    visionTool({defaultApiVersion: apiVersion}),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft/enable',
          disable: '/api/draft/disable',
        }
      }
    }),
  ],
})