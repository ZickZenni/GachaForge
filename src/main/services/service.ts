﻿import {
    Category,
    Comment,
    GetCommentsOptions,
    Id,
    Mod,
    SearchModsOptions,
    SearchModsResponse
} from '@common/types/service'

export class BaseService {
    public async searchMods(options: SearchModsOptions): Promise<SearchModsResponse> {
        throw new Error('Not implemented')
    }

    public async getMod(modId: Id): Promise<Mod | null> {
        throw new Error('Not implemented')
    }

    public async getModComments(modId: Id, options: GetCommentsOptions): Promise<Comment[]> {
        throw new Error('Not implemented')
    }

    public async getCategories(): Promise<Category[]> {
        throw new Error('Not implemented')
    }

    public async getModDownloadUrl(modId: Id): Promise<{
        url: string
        fileName: string
    } | null> {
        throw new Error('Not implemented')
    }

    public getId(): string {
        throw new Error('Not implemented')
    }
}
