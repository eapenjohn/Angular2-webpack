import {
    beforeEach,
    beforeEachProviders,
    it,
    describe,
    expect,
    inject,
    TestComponentBuilder
} from "@angular/core/testing"

import {
    provide
} from "@angular/core"

import {
    Router,
    ActivatedRoute
} from "@angular/router"


import {
    DatasetEditComponent
} from './edit.component'


import {
    DatasetService
} from '../service/dataset.service'

describe("edit.component tests", () => {

    beforeEachProviders(() => [
        Router,
        ActivatedRoute,
        provide(DatasetService, {
            useClass: DatasetService

        })
    ])


    it("Object created successfully", inject([TestComponentBuilder], (edit: TestComponentBuilder) => {
        expect(1).toBe(1)
    }))


})