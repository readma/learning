import React, { Component } from 'react';
import { post } from 'axios';

export class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '591C9817-8C4F-4B30-AA1C-2F6CF1357F47',
            file: null,
        };
    }

    async submit(e) {
        e.preventDefault();

        const url = `/api/UploadFile/${this.state.id}`;
        const formData = new FormData();
        formData.append('body', this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        return post(url, formData, config);
    }

    setFile(e) {
        this.setState({ file: e.target.files[0] });
    }

    render() {
        return (
            <form onSubmit={e => this.submit(e)}>
                <h1>File Upload</h1>
                <input type="file" onChange={e => this.setFile(e)} />
                <button type="submit">Upload</button>
            </form>
        );
    }
}